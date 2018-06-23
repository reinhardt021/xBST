var express = require('express');
var router = express.Router();


// TODO: BST
var jack = {
    name: "Jack",
    nodeLeft: null,
    nodeRight: null
};
var tom = {
    name: "Tom",
    nodeLeft: null,
    nodeRight: null
};
var kay = {
    name: "Kay",
    nodeLeft: null,
    nodeRight: null
};
var kevin = {
    name: "Kevin",
    nodeLeft: kay,
    nodeRight: tom
};
var jill = {
    name: "Jill",
    nodeLeft: jack,
    nodeRight: null
};
var joe = {
    name: "Joe",
    nodeLeft: jill,
    nodeRight: kevin
};
var topOfBST = joe;

function logBSTContacts(binarySearchTree) {
    // if left node exists then recursively call this
    // else output this name
    if (binarySearchTree.nodeLeft !== null) {
        logBSTContacts(binarySearchTree.nodeLeft);
    } else {
        console.log('This current Node is >> ' + binarySearchTree.name);
    }

    // if right node exists then recursively call this
    // else return to go back up a level
    if (binarySearchTree.nodeRight !== null) {
        logBSTContacts(binarySearchTree.nodeRight);
    } else {
        return true;
    }
}

/* GET /users listing. */
router.get('/', function(req, res, next) {
    // var contacts = logBSTContacts(topOfBST);
    logBSTContacts(topOfBST); // logs the output to the server
    // res.send('respond with a resource');
    res.send({bst: topOfBST}});
});

module.exports = router;
