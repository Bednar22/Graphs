import React, { useEffect, useState } from 'react';

class Edge {
    constructor(destiantion, weight) {
        this.dest = destiantion;
        this.weight = weight;
    }
}

const Graph = (props) => {
    //const vertices = 10;
    const graph = new Map();
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
    const addVertex = (v) => {
        graph.set(v, []);
    };

    const initVertecies = () => {
        for (let i = 0; i < vertices.length; i++) {
            addVertex(vertices[i]);
        }
    };

    const addEdge = (src, dest, w) => {
        graph.get(src).push({ dest: dest, weight: w });
        graph.get(dest).push({ dest: src, weight: w });
    };

    const initGraph = () => {
        addEdge('A', 'B', 2);
        addEdge('A', 'D', 1);
        addEdge('A', 'E', 4);
        addEdge('B', 'C', 5);
        addEdge('D', 'E', 7);
        addEdge('E', 'F', 8);
        addEdge('E', 'C', 2);
        addEdge('C', 'F', 1);
    };

    const printGraph = () => {
        let srcs = graph.keys();
        for (let vert of srcs) {
            let dests = graph.get(vert);
            let toPrint = ' ';
            for (let edge of dests) {
                toPrint += edge.dest + '(' + edge.weight + '), ';
            }
            console.log(vert + ' -->' + toPrint);
        }
    };

    useEffect(() => {
        initVertecies();
        initGraph();
        printGraph();
    }, []);

    return (
        <>
            <h5> Graf dodany</h5>
        </>
    );
};

export default Graph;
