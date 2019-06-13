let INF = Number.POSITIVE_INFINITY
// 地图矩阵
let startPiont = new Array(0, 0, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 7)
let endPoint = new Array(1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 7, 8, 8)
let weight = new Array(5, 6, 11, 10, 8, 15, 5, 2, 7, 15, 15, 3, 22)
let dis = new Array(maps.length)

function BellmanFord(maps) {
    dis[0] = 0
    for (k = 1; k <= maps.length - 1; k++) //进行n-1轮松弛
        for (i = 1; i <= maps.length; i++) //枚举每一条边
            if (dis[startPiont[i]] > dis[endPoint[i]] + weight[i])
                dis[startPiont[i]] = dis[endPoint[i]] + weight[i]
    return dis
}

console.log(BellmanFord(maps))