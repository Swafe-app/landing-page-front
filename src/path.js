import mapPinFromImg from './assets/mapPinFrom.svg';
import mapPinToImg from './assets/mapPinTo.svg';
import dangerIconImg from './assets/danger.svg';

function oTop(selector='', withHeight = 0) {
    if (!document.querySelector(selector)) {
        return 0;
    }

    const element = document.querySelector(selector);

    if(withHeight === 0) {
        return element.offsetTop;
    } else {
        return element.offsetTop + element.offsetHeight;
    }
}

function oMiddle(selector=''){
    if (!document.querySelector(selector)) {
        return 0;
    }

    const element = document.querySelector(selector);

    return element.offsetTop + (element.offsetHeight / 2);
}


class SecurePath {
    constructor() {
        this.canvas = this.generateCanvas();        
        this.events();
    }

    generateCanvas() {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'securePath');
        document.body.appendChild(canvas);
        return document.getElementById('securePath');
    }

    events() {
        const self = this;
        window.addEventListener('resize', function(){
            self.heightCanvas();
            self.draw();
        });
        this.heightCanvas();
        this.draw();
    }    

    heightCanvas() {
        this.canvas.style.height = document.body.offsetHeight + 'px';
    }

    generateGrid(col=12, sX) {
        const grid = [];
        for(let i=0; i<col; i++){
            const width = sX / col;
            grid.push(parseInt(width*i));
        }
        return grid;
    }

    generatePath(col=12, sX){
        const path = [
            [7, oTop('.sec1 h1', 1) + 60],
            [12, oTop('.sec1 h1', 1) + 60],

            [12, oTop('.sec2 .secTitle', 0) - 120],
            [2, oTop('.sec2 .secTitle', 0) - 120],

            [2, oMiddle('.sec2 .cardContainer')],
            [8, oMiddle('.sec2 .cardContainer')],

            [8, oTop('.sec3 .secTitle', 0) - 120],
            [4, oTop('.sec3 .secTitle', 0) - 120],

            [4, oTop('.sec4', 0) + 120],
            [7, oTop('.sec4', 0) + 120],

            [7, oTop('.sec4', 0) - 120],
            [12, oTop('.sec4', 0) - 120],

            [12, oTop('.sec5 .secTitle', 0) - 120],
            [3, oTop('.sec5 .secTitle', 0) - 120],

            [3, oTop('.sec5 .profileContainer', 0) + 220],
            [7, oTop('.sec5 .profileContainer', 0) + 220],

            [7, oTop('.sec5 .profileContainer', 0) + 420],
        ];
        return path;
    }

    generateFakePath(col=12, sX){
        const path1 = [
            [12, oTop('.sec2 .secTitle', 0) - 120],
            [12, oTop('.sec2 .secTitle', 0)],
        ];
 
        const path2 = [
            [2, oTop('.sec2 .secTitle', 0) - 320],
            [2, oTop('.sec2 .secTitle', 0) - 120],
        ];

        const path3 = [
            [4, oTop('.sec4', 0) + 120],
            [2, oTop('.sec4', 0) + 120],
        ];

        return [path1, path2, path3];
    }

    generateDangerIcon(){
        document.querySelectorAll('.dangerIcon').forEach(function(ico){
            ico.remove();
        });

        document.querySelectorAll('.dangerIconBlur').forEach(function(blur){
            blur.remove();
        });

        const icons = [
            [12, oTop('.sec2 .secTitle', 0)],
            [2, oTop('.sec2 .secTitle', 0) - 320],
            [2, oTop('.sec4', 0) + 120],
        ];

        return icons;
    }

    draw(){
        const self = this;
        const ctx = this.canvas.getContext('2d');
        const sX = self.canvas.offsetWidth;
        const sY = self.canvas.offsetHeight;
        const grid = this.generateGrid(12, sX);
        const path = this.generatePath(12, sX);
        const fakePaths = this.generateFakePath(12, sX);
        const dangerIcons = this.generateDangerIcon();

        this.canvas.width = sX;
        this.canvas.height = sY;        

        ctx.clearRect(0,0,sX,sY);
        
        if(document.querySelector('#mapPinFrom')){
            document.querySelector('#mapPinFrom').remove();
        }
        if(document.querySelector('#mapPinTo')){
            document.querySelector('#mapPinTo').remove();
        }
        
        const mapPinFrom = document.createElement('img');
        const mapPinTo = document.createElement('img');    

        mapPinFrom.setAttribute('id', 'mapPinFrom');
        mapPinTo.setAttribute('id', 'mapPinTo');
        mapPinFrom.setAttribute('src', mapPinFromImg);
        mapPinTo.setAttribute('src', mapPinToImg);
        mapPinFrom.style.top = path[0][1] - 100 + 'px';
        mapPinFrom.style.left = grid[path[0][0]-1] - 50 + 'px';
        mapPinTo.style.top = path.reverse()[0][1] - 100 + 'px';
        mapPinTo.style.left = grid[path.reverse()[0][0]-1] - 50 + 'px';
        mapPinFrom.classList.add('mapPinImage');
        mapPinTo.classList.add('mapPinImage');
        document.body.append(mapPinFrom);
        document.body.append(mapPinTo);    
        
        dangerIcons.forEach(function(ico){
            const icon = document.createElement('img');
            icon.classList.add('dangerIcon');
            icon.style.top = ico[1] - 60 + 'px';
            icon.style.left = grid[ico[0]-1] - 28 + 'px';
            icon.setAttribute('src', dangerIconImg);
            document.body.append(icon);  

            const blur = document.createElement('div');
            blur.classList.add('dangerIconBlur');
            blur.style.top = ico[1] + 'px';
            blur.style.left = grid[ico[0]-1] + 'px';
            document.body.append(blur); 
        });

        const gradient = ctx.createLinearGradient(0, path[0][1], 0, sY);
        gradient.addColorStop(0, '#42a1ee');
        gradient.addColorStop(1, ' #63e7bb');

        fakePaths.forEach(function(p){
            ctx.beginPath();
            ctx.lineWidth = 30;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = '#E5EFF9';           

            p.forEach(function(point, index){                          
                const x = grid[point[0]-1];
                const y = point[1];
                
                if(index===0){
                    ctx.moveTo(x, y);
                }else{
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
            });

            ctx.closePath();
        });


        ctx.beginPath();
        ctx.lineWidth = 30;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = gradient;
        path.forEach(function(point, index){            
            const x = grid[point[0]-1];
            const y = point[1];
            
            if(index===0){
                ctx.moveTo(x, y);
            }else{
                ctx.lineTo(x, y);
            }
            ctx.stroke();
        });
    }
}

function main() {
    const securePath = new SecurePath();
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        main();
    }, 500)
});