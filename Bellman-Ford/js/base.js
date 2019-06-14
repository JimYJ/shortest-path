let INF = Number.POSITIVE_INFINITY
let n = 9
// 地图矩阵
// let startPiont = new Array(0, 0, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 7)
// let endPoint = new Array(1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 7, 8, 8)
// let weight = new Array(5, 6, 11, 10, 8, 15, 5, 2, 7, -1, 15, 3, 22)
let startPiont = new Array(0, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 1)
let endPoint = new Array(2, 3, 4, 4, 5, 6, 6, 7, 8, 7, 8, 8, 0)
let weight = new Array(6, 11, 10, 8, 15, 5, 2, 7, 15, 15, 3, 22, 5)
let dis = new Array(n)
let last = new Array(n)
for (i = 0; i < n; i++) {
    dis[i] = INF
    last[i] = -1
}

function BellmanFord() {
    dis[0] = 0
    check = true;
    for (k = 1; k < n && check; k++) {
        check = false
        for (i = 0; i <= startPiont.length; i++) {
            if (dis[endPoint[i]] > dis[startPiont[i]] + weight[i]) {
                dis[endPoint[i]] = dis[startPiont[i]] + weight[i]
                check = true
                last[endPoint[i]] = startPiont[i]
            }
            //反方向尝试
            if (dis[startPiont[i]] > dis[endPoint[i]] + weight[i]) {
                dis[startPiont[i]] = dis[endPoint[i]] + weight[i]
                check = true
                last[startPiont[i]] = endPoint[i]
            }
        }
    }
    return dis
}
console.log(BellmanFord())