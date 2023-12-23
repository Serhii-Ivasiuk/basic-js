const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        const link = value;
        this.chain.push(`( ${link} )`);
        return this;
    },

    removeLink(position) {
        if (
            typeof position !== 'number' ||
            !Number.isInteger(position) ||
            position < 1 ||
            position > this.chain.length
        ) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }

        this.chain.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        const res = this.chain.join('~~');
        this.chain = [];
        return res;
    },
};

module.exports = {
    chainMaker,
};
