class ChartBuilder{
    constructor(){
        this.initSettings();
        this.initColors();
    }

    initColors(){
        this.colors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            darkOrange: 'rgb(255,140,0)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(201, 203, 207)',
            brown: 'rgb(165,42,42)',
            lightGreen: 'rgb(144,238,144)',
            cyan: 'rgb(0,255,255)',
            darkBlue: 'rgb(0,0,139)'
        };

        this.colorNames = Object.keys(this.colors);
    }


    initSettings(){
        Chart.defaults.global.defaultFontSize = 14;
    }

    get colors(){
        return this._colors;
    }


    set colors(values){
        this._colors = values;
    }



    get colors(){
        return this._colors;
    }


    set colors(values){
        this._colors = values;
    }
}