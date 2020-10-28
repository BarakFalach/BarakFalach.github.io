import { render } from "react-dom";
import React, { Component , useState } from 'react';
  

   const Logic={
    initCube:function(colorArray)
    {
        let res = new Array(26)
        for (var i=0;i<26;i++)
        {
        res[i] = {stateArr:[null,null,null,null,null,null],
        }}
     //Orange Layer


     res[0].stateArr[0]=colorArray[0][0];
     res[0].stateArr[3]=colorArray[3][2];
     res[0].stateArr[5]=colorArray[5][6];
 
     res[1].stateArr[0]=colorArray[0][1];
     res[1].stateArr[5]=colorArray[5][7];
 
     res[2].stateArr[0]=colorArray[0][2];
     res[2].stateArr[1]=colorArray[1][0];
     res[2].stateArr[5]=colorArray[5][8];
 
     res[3].stateArr[0]=colorArray[0][3];
     res[3].stateArr[3]=colorArray[3][5];
 
     res[4].stateArr[0]=colorArray[0][4];
 
     res[5].stateArr[0] = colorArray[0][5];
     res[5].stateArr[1] = colorArray[1][3];
 
     res[6].stateArr[0] = colorArray[0][6];
     res[6].stateArr[3] = colorArray[3][8];
     res[6].stateArr[4] = colorArray[4][8];
 
     res[7].stateArr[0] = colorArray[0][7];
     res[7].stateArr[4] = colorArray[4][7];
 
     res[8].stateArr[0] = colorArray[0][8];
     res[8].stateArr[1] = colorArray[1][6];
     res[8].stateArr[4] = colorArray[4][6];
 
     //red Layer
     res[9].stateArr[2] = colorArray[2][0];
     res[9].stateArr[1] = colorArray[1][2];
     res[9].stateArr[5] = colorArray[5][2];
 
     res[10].stateArr[2] = colorArray[2][1];
     res[10].stateArr[5] = colorArray[5][1];
 
     res[11].stateArr[2] = colorArray[2][2];
     res[11].stateArr[3] = colorArray[3][0];
     res[11].stateArr[5] = colorArray[5][0];
 
     res[12].stateArr[2] = colorArray[2][3];
     res[12].stateArr[1] = colorArray[1][5];
 
     res[13].stateArr[2] = colorArray[2][4];
 
     res[14].stateArr[2] = colorArray[2][5];
     res[14].stateArr[3] = colorArray[3][3];
 
     res[15].stateArr[2] = colorArray[2][6];
     res[15].stateArr[1] = colorArray[1][8];
     res[15].stateArr[4] = colorArray[4][0];
 
     res[16].stateArr[2] = colorArray[2][7];
     res[16].stateArr[4] = colorArray[4][1];
 
     res[17].stateArr[2] = colorArray[2][8];
     res[17].stateArr[3] = colorArray[3][6];
     res[17].stateArr[4] = colorArray[4][2];
 
     //inner Layer
 
     res[18].stateArr[1] = colorArray[1][1];
     res[18].stateArr[5] = colorArray[5][5];
 
     res[19].stateArr[1] = colorArray[1][4];
 
 
     res[20].stateArr[1] = colorArray[1][7];
     res[20].stateArr[4] = colorArray[4][3];
 
     res[21].stateArr[4] = colorArray[4][4];
 
     res[22].stateArr[4] = colorArray[4][5];
     res[22].stateArr[3] = colorArray[3][7];
 
     res[23].stateArr[3] = colorArray[3][4];
 
     res[24].stateArr[3] = colorArray[3][1];
     res[24].stateArr[5] = colorArray[5][3];
 
     res[25].stateArr[5] = colorArray[5][4];

    //  console.log(res[7])


     return res
    },

    updateCube:function (colorArray,blockArr)
    {
    let res = blockArr
     //Orange Layer


     res[0].stateArr[0]=colorArray[0][0];
     res[0].stateArr[3]=colorArray[3][2];
     res[0].stateArr[5]=colorArray[5][6];
 
     res[1].stateArr[0]=colorArray[0][1];
     res[1].stateArr[5]=colorArray[5][7];
 
     res[2].stateArr[0]=colorArray[0][2];
     res[2].stateArr[1]=colorArray[1][0];
     res[2].stateArr[5]=colorArray[5][8];
 
     res[3].stateArr[0]=colorArray[0][3];
     res[3].stateArr[3]=colorArray[3][5];
 
     res[4].stateArr[0]=colorArray[0][4];
 
     res[5].stateArr[0] = colorArray[0][5];
     res[5].stateArr[1] = colorArray[1][3];
 
     res[6].stateArr[0] = colorArray[0][6];
     res[6].stateArr[3] = colorArray[3][8];
     res[6].stateArr[4] = colorArray[4][8];
 
     res[7].stateArr[0] = colorArray[0][7];
     res[7].stateArr[4] = colorArray[4][7];
 
     res[8].stateArr[0] = colorArray[0][8];
     res[8].stateArr[1] = colorArray[1][6];
     res[8].stateArr[4] = colorArray[4][6];
 
     //red Layer
     res[9].stateArr[2] = colorArray[2][0];
     res[9].stateArr[1] = colorArray[1][2];
     res[9].stateArr[5] = colorArray[5][2];
 
     res[10].stateArr[2] = colorArray[2][1];
     res[10].stateArr[5] = colorArray[5][1];
 
     res[11].stateArr[2] = colorArray[2][2];
     res[11].stateArr[3] = colorArray[3][0];
     res[11].stateArr[5] = colorArray[5][0];
 
     res[12].stateArr[2] = colorArray[2][3];
     res[12].stateArr[1] = colorArray[1][5];
 
     res[13].stateArr[2] = colorArray[2][4];
 
     res[14].stateArr[2] = colorArray[2][5];
     res[14].stateArr[3] = colorArray[3][3];
 
     res[15].stateArr[2] = colorArray[2][6];
     res[15].stateArr[1] = colorArray[1][8];
     res[15].stateArr[4] = colorArray[4][0];
 
     res[16].stateArr[2] = colorArray[2][7];
     res[16].stateArr[4] = colorArray[4][1];
 
     res[17].stateArr[2] = colorArray[2][8];
     res[17].stateArr[3] = colorArray[3][6];
     res[17].stateArr[4] = colorArray[4][2];
 
     //inner Layer
 
     res[18].stateArr[1] = colorArray[1][1];
     res[18].stateArr[5] = colorArray[5][5];
 
     res[19].stateArr[1] = colorArray[1][4];
 
 
     res[20].stateArr[1] = colorArray[1][7];
     res[20].stateArr[4] = colorArray[4][3];
 
     res[21].stateArr[4] = colorArray[4][4];
 
     res[22].stateArr[4] = colorArray[4][5];
     res[22].stateArr[3] = colorArray[3][7];
 
     res[23].stateArr[3] = colorArray[3][4];
 
     res[24].stateArr[3] = colorArray[3][1];
     res[24].stateArr[5] = colorArray[5][3];
 
     res[25].stateArr[5] = colorArray[5][4];

    //  console.log(res[7])


     return res
    },
    initialMatrix: function(){

        let res =     
        [['#F8961E','#F8961E','#F8961E','#F8961E','#F8961E','#F8961E','#F8961E','#F8961E','#F8961E'],
        ["#73A942",'#73A942',"#73A942",'#73A942',"#73A942",'#73A942',"#73A942",'#73A942',"#73A942"],
        ['#931a25','#931a25','#931a25','#931a25','#931a25','#931a25','#931a25','#931a25','#931a25'],
        ['#4895Ef','#4895Ef','#4895Ef','#4895Ef','#4895Ef','#4895Ef','#4895Ef','#4895Ef','#4895Ef'],
        ['#ede7e3','#ede7e3','#ede7e3','#ede7e3','#ede7e3','#ede7e3','#ede7e3','#ede7e3','#ede7e3'],
        ['#f9c74f','#f9c74f','#f9c74f','#f9c74f','#f9c74f','#f9c74f','#f9c74f','#f9c74f','#f9c74f']]
        return res
    
    },

    ClockWiseRotation: function(arr)
    {
        var temp1 = arr[0];
        var temp2 = arr[1];

        arr[0]=arr[2];
        arr[1]=arr[5];
        arr[2]=arr[8];
        arr[5]=arr[7];
        arr[8]=arr[6];
        arr[7]=arr[3];
        arr[6]=temp1;
        arr[3]=temp2;

        return arr;
    },

    AntiClockWiseRotation:function (arr)
    {
        var temp1 = arr[0];
        var temp2 = arr[1];
        var temp3 = arr[2];

        arr[0]=arr[6];
        arr[1]=arr[3];
        arr[2]=temp1;
        arr[3]=arr[7];
        arr[6]=arr[8];
        arr[7]=arr[5];
        arr[8]=temp3;
        arr[5]=temp2;

        return arr;
    },
    

     UP:function(colorArray)
    {
        
        // this.state.cubeMat[4]=ClockWiseRotation(this.state.cubeMat[4]);
    
        colorArray[4] = this.ClockWiseRotation(colorArray[4])



        var temp1=colorArray[0][6];
        var temp2=colorArray[0][7];
        var temp3=colorArray[0][8];

        colorArray[0][6] = colorArray[1][6];


        colorArray[0][7] = colorArray[1][7];
        colorArray[0][8] = colorArray[1][8];

        colorArray[1][6] = colorArray[2][6];
        colorArray[1][7] = colorArray[2][7];
        colorArray[1][8] = colorArray[2][8];

        colorArray[2][6] = colorArray[3][6];
        colorArray[2][7] = colorArray[3][7];
        colorArray[2][8] = colorArray[3][8];

        colorArray[3][6] = temp1;
        colorArray[3][7] = temp2;
        colorArray[3][8] = temp3;



        return colorArray

    },

    Left:function(colorArray)
    {
        colorArray[3] = this.ClockWiseRotation(colorArray[3]);
    
        var temp1 = colorArray[0][0];
        var temp2 = colorArray[0][3];
        var temp3 = colorArray[0][6];

        colorArray[0][0] = colorArray[4][8];
        colorArray[0][3] = colorArray[4][5];
        colorArray[0][6] = colorArray[4][2];

        colorArray[4][8] = colorArray[2][8];
        colorArray[4][5] = colorArray[2][5];
        colorArray[4][2] = colorArray[2][2];

        colorArray[2][8] = colorArray[5][0];
        colorArray[2][5] = colorArray[5][3];
        colorArray[2][2] = colorArray[5][6];

        colorArray[5][0] = temp1;
        colorArray[5][3] = temp2;
        colorArray[5][6] = temp3;

        return colorArray

    },
    UP_R:function(colorArray)
    {

        colorArray[4]=this.AntiClockWiseRotation(colorArray[4])

        var temp1=colorArray[0][6];
        var temp2=colorArray[0][7];
        var temp3=colorArray[0][8];

        colorArray[0][6] = colorArray[3][6];
        colorArray[0][7] = colorArray[3][7];
        colorArray[0][8] = colorArray[3][8];

        colorArray[3][6] = colorArray[2][6];
        colorArray[3][7] = colorArray[2][7];
        colorArray[3][8] = colorArray[2][8];

        colorArray[2][6] = colorArray[1][6];
        colorArray[2][7] = colorArray[1][7];
        colorArray[2][8] = colorArray[1][8];


        colorArray[1][6] = temp1;
        colorArray[1][7] = temp2;
        colorArray[1][8] = temp3;

        return colorArray

    },
    Down:function(colorArray)
    {

        colorArray[5]=this.ClockWiseRotation(colorArray[5]);

        var temp1=colorArray[0][0];
        var temp2=colorArray[0][1];
        var temp3=colorArray[0][2];

        colorArray[0][0] = colorArray[3][0];
        colorArray[0][1] = colorArray[3][1];
        colorArray[0][2] = colorArray[3][2];

        colorArray[3][0] = colorArray[2][0];
        colorArray[3][1] = colorArray[2][1];
        colorArray[3][2] = colorArray[2][2];

        colorArray[2][0] = colorArray[1][0];
        colorArray[2][1] = colorArray[1][1];
        colorArray[2][2] = colorArray[1][2];


        colorArray[1][0] = temp1;
        colorArray[1][1] = temp2;
        colorArray[1][2] = temp3;

        return colorArray
    },
    Down_R:function(colorArray)
    {

    
        colorArray[5]=this.AntiClockWiseRotation(colorArray[5]);

        var temp1=colorArray[0][0];
        var temp2=colorArray[0][1];
        var temp3=colorArray[0][2];

        colorArray[0][0] = colorArray[1][0];
        colorArray[0][1] = colorArray[1][1];
        colorArray[0][2] = colorArray[1][2];

        colorArray[1][0] = colorArray[2][0];
        colorArray[1][1] = colorArray[2][1];
        colorArray[1][2] = colorArray[2][2];

        colorArray[2][0] = colorArray[3][0];
        colorArray[2][1] = colorArray[3][1];
        colorArray[2][2] = colorArray[3][2];

        colorArray[3][0] = temp1;
        colorArray[3][1] = temp2;
        colorArray[3][2] = temp3;

        return colorArray


    },
    Front:function(colorArray)
    {
    
        colorArray[0]=this.ClockWiseRotation(colorArray[0]);

        var temp1 = colorArray[1][6];
        var temp2 = colorArray[1][3];
        var temp3 = colorArray[1][0];

        colorArray[1][6] = colorArray[4][8]; 
        colorArray[1][3] = colorArray[4][7];
        colorArray[1][0] = colorArray[4][6];

        colorArray[4][8] = colorArray[3][2];
        colorArray[4][7] = colorArray[3][5];
        colorArray[4][6] = colorArray[3][8];

        colorArray[3][2] = colorArray[5][8];
        colorArray[3][5] = colorArray[5][7];
        colorArray[3][8] = colorArray[5][6];

        colorArray[5][8] = temp1; 
        colorArray[5][7] = temp2;
        colorArray[5][6] = temp3;

        return colorArray

    },
    Front_R:function(colorArray)
    {
        
        colorArray[0]=this.AntiClockWiseRotation(colorArray[0]);

        var temp1 = colorArray[1][6];
        var temp2 = colorArray[1][3];
        var temp3 = colorArray[1][0];

        colorArray[1][6] = colorArray[5][8]; 
        colorArray[1][3] = colorArray[5][7];
        colorArray[1][0] = colorArray[5][6];

        colorArray[5][8] = colorArray[3][2]; 
        colorArray[5][7] = colorArray[3][5];
        colorArray[5][6] = colorArray[3][8];

        colorArray[3][2] = colorArray[4][8];
        colorArray[3][5] = colorArray[4][7];
        colorArray[3][8] = colorArray[4][6];

        colorArray[4][8] = temp1;
        colorArray[4][7] = temp2;
        colorArray[4][6] = temp3;

        return colorArray

    },
    Back:function(colorArray)
    {
        
        colorArray[2]=this.ClockWiseRotation(colorArray[2]);

        var temp1 = colorArray[3][0];
        var temp2 = colorArray[3][3];
        var temp3 = colorArray[3][6];

        colorArray[3][0] = colorArray[4][2];
        colorArray[3][3] = colorArray[4][1];
        colorArray[3][6] = colorArray[4][0];

        colorArray[4][2] = colorArray[1][8];
        colorArray[4][1] = colorArray[1][5];
        colorArray[4][0] = colorArray[1][2];

        colorArray[1][8] = colorArray[5][2];
        colorArray[1][5] = colorArray[5][1];
        colorArray[1][2] = colorArray[5][0];

        colorArray[5][2] = temp1;
        colorArray[5][1] = temp2;
        colorArray[5][0] = temp3;

        return colorArray


    },
    Back_R:function(colorArray)
    {
        
        colorArray[2]=this.AntiClockWiseRotation(colorArray[2]);

        var temp1 = colorArray[3][0];
        var temp2 = colorArray[3][3];
        var temp3 = colorArray[3][6];

        colorArray[3][0] = colorArray[5][2];
        colorArray[3][3] = colorArray[5][1];
        colorArray[3][6] = colorArray[5][0];

        colorArray[5][2] = colorArray[1][8];
        colorArray[5][1] = colorArray[1][5];
        colorArray[5][0] = colorArray[1][2];

        colorArray[1][8] = colorArray[4][2];
        colorArray[1][5] = colorArray[4][1];
        colorArray[1][2] = colorArray[4][0];

        colorArray[4][2] = temp1;
        colorArray[4][1] = temp2;
        colorArray[4][0] = temp3;

        return colorArray


    },
    
    Left_R:function(colorArray)
    {
        
        colorArray[3] = this.AntiClockWiseRotation(colorArray[3]);
    
        var temp1 = colorArray[0][0];
        var temp2 = colorArray[0][3];
        var temp3 = colorArray[0][6];

        colorArray[0][0] = colorArray[5][0];
        colorArray[0][3] = colorArray[5][3];
        colorArray[0][6] = colorArray[5][6];

        colorArray[5][0] = colorArray[2][8];
        colorArray[5][3] = colorArray[2][5];
        colorArray[5][6] = colorArray[2][2];

        colorArray[2][8] = colorArray[4][8];
        colorArray[2][5] = colorArray[4][5];
        colorArray[2][2] = colorArray[4][2];

        colorArray[4][8] = temp1;
        colorArray[4][5] = temp2;
        colorArray[4][2] = temp3;
        
        return colorArray
    },
    Right:function(colorArray)
    {
        colorArray[1] = this.ClockWiseRotation(colorArray[1]);
    
        var temp1 = colorArray[0][2];
        var temp2 = colorArray[0][5];
        var temp3 = colorArray[0][8];

        colorArray[0][2] = colorArray[5][2];
        colorArray[0][5] = colorArray[5][5];
        colorArray[0][8] = colorArray[5][8];

        colorArray[5][2] = colorArray[2][6];
        colorArray[5][5] = colorArray[2][3];
        colorArray[5][8] = colorArray[2][0];

        colorArray[2][6] = colorArray[4][6];
        colorArray[2][3] = colorArray[4][3];
        colorArray[2][0] = colorArray[4][0];

        colorArray[4][6] = temp1;
        colorArray[4][3] = temp2;
        colorArray[4][0] = temp3;

        return colorArray

    },
    Right_R:function(colorArray)
    {
        
        colorArray[1] = this.AntiClockWiseRotation(colorArray[1]);
    
        var temp1 = colorArray[0][2];
        var temp2 = colorArray[0][5];
        var temp3 = colorArray[0][8];

        colorArray[0][2] = colorArray[4][6];
        colorArray[0][5] = colorArray[4][3];
        colorArray[0][8] = colorArray[4][0];

        colorArray[4][6] = colorArray[2][6];
        colorArray[4][3] = colorArray[2][3];
        colorArray[4][0] = colorArray[2][0];

        colorArray[2][6] = colorArray[5][2];
        colorArray[2][3] = colorArray[5][5];
        colorArray[2][0] = colorArray[5][8];

        colorArray[5][2] = temp1;
        colorArray[5][5] = temp2;
        colorArray[5][8] = temp3;

        return colorArray

}
}


    export default Logic