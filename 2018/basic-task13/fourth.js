var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name, node) {
    if(node){
        if(node.name === name){
            return node.id;
        }
        let left = findIdByName(name, node.left);
        if(left){
            return left;
        }else {
            return findIdByName(name, node.right);
        }
    }
}
// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id, node) {
    if(node){
        if(node.id === id){
            return node.name;
        }
        let left = findNameById(id, node.left);
        if(left){
            return left;
        }else {
            return findNameById(id, node.right);
        }
    }
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(node) {
    if(node){
        console.log(node.name);
        if(node.left) getListWithDLR(node.left);
        if(node.right) getListWithDLR(node.right);
    }
}
// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(node) {
    if(node){
        if(node.left) getListWithLDR(node.left);
        console.log(node.name);
        if(node.right) getListWithLDR(node.right);
    }
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(node) {
    if(node){
        if(node.left) getListWithLRD(node.left);
        if(node.right) getListWithLRD(node.right);
        console.log(node.name);
    }
}

