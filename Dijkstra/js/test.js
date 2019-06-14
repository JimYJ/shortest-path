let INF = Number.POSITIVE_INFINITY
// 地图矩阵
let maps = [
    [0, 5, 6, INF, INF, INF, INF, INF, INF],
    [5, 0, INF, 11, 10, INF, INF, INF, INF],
    [6, INF, 0, INF, 8, 15, INF, INF, INF],
    [INF, 11, INF, 0, INF, INF, 5, INF, INF],
    [INF, 10, 8, INF, 0, INF, 2, 7, 15],
    [INF, INF, 15, INF, INF, 0, INF, 15, INF],
    [INF, INF, INF, 5, 2, INF, 0, INF, 3],
    [INF, INF, INF, INF, 7, 15, INF, 0, 22],
    [INF, INF, INF, INF, 15, INF, 3, 22, 0]
]
let dis = new Array(maps.length)
let choosed = new Array(maps.length)
// 初始化距离和已选择的点
for (i = 0; i < maps.length; i++) {
    choosed[i] = false
    dis[i] = INF
}

function Dijkstra2(maps) {
    dis[0] = 0 //起点到其本身的距离为0
    choosed[0] = true // 将起点加入已选择点
    let chooseCount = 1
    for (i = 0; i < maps.length; i++) {
        dis[i] = maps[0][i]
        if (dis[i] != INF) {
            last[i] = 0
        }
    }
    while (chooseCount < maps.length) {
        newPoint = -1
        min = INF
        // 选出当前最短路径
        for (i = 0; i < maps.length; i++) {
            if (choosed[i]) {
                continue
            }
            if (dis[i] < min) {
                min = dis[i]
                newPoint = i
                console.log(i, dis[i])
            }
        }
        if (newPoint == -1) {
            console.log("路径不通，退出循环")
            break
        }
        chooseCount++
        choosed[newPoint] = true; // 将点加入已选点集合中
        for (i = 0; i < maps.length; i++) {
            if (choosed[i]) {
                continue
            }
            if (maps[newPoint][i] < INF) {
                if (dis[i] > dis[newPoint] + maps[newPoint][i]) {
                    dis[i] = dis[newPoint] + maps[newPoint][i]
                }
            }
        }
        console.log(dis)
    }
}
console.log(Dijkstra2(maps))





function Dijkstra(matrix, start = 0) {
    const rows = matrix.length,
        cols = matrix[0].length;

    if (rows !== cols || start >= rows) return new Error("邻接矩阵错误或者源点错误");

    //初始化distance
    const distance = new Array(rows).fill(Infinity);
    distance[start] = 0;

    for (let i = 0; i < rows; i++) {
        //达到不了的顶点不能作为中转跳点
        if (distance[i] < Infinity) {
            for (let j = 0; j < cols; j++) {
                //比如通过比较distance[i] + matrix[i][j]和distance[j]的大小来决定是否更新distance[j]。
                if (matrix[i][j] + distance[i] < distance[j]) {
                    distance[j] = matrix[i][j] + distance[i];
                }
            }
            console.log(distance);
        }
    }
    return distance;
}
console.log(Dijkstra(maps, 0))