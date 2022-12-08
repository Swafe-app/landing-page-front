class Stars{
    constructor(selector){
        this.selector = selector;
        this.active = -1;
        this.events();
    }

    events(){
        const self = this;
        this.selector.querySelectorAll('svg').forEach(function(svg, index){
            svg.addEventListener('mouseover', function(){
                self.selectStars(index);
                self.active = index;
            });
        });
        this.selector.addEventListener('mouseleave', function(){
            self.clearStars();
            self.active = -1;
        })
    }

    clearStars(){
        this.selector.querySelectorAll('svg').forEach(function(svg, i){
            svg.classList.remove('hover');
        })
    }

    selectStars(index=0){
        this.clearStars();
        this.selector.querySelectorAll('svg').forEach(function(svg, i){
            if(i<=index){
                svg.classList.add('hover');
            }
        })
    }
}

function main() {
    document.querySelectorAll('.sec5 .starContainer').forEach(function(stars){
        const c = new Stars(stars);
    })
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        main();
    }, 500)
});