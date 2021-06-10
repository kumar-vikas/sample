import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import "./canvasStyle.css"

function Test(props){
    var canvas;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var activeTool = 1;
    var rect, origX, origY;
    var isDown = false;
    var boxColor = 'rgba(0,0,255,0.5)';
    var paintOptions = {
      color: '#0000ff',
      width: 2
    };
    
    var canStyle = {
      border:"1px solid red"
    }

    useEffect(() => {
        canvas = new fabric.Canvas('c', { selection: false });

        width = props.canprops.width;
        height = props.canprops.height;
        canvas.setDimensions({width:width, height:height});
        console.log(props.canprops);
        ccd()
    });

    function ccd(){
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.color = paintOptions.color;
      canvas.freeDrawingBrush.width = paintOptions.width;

      canvas.on("mouse:down", function(o){
        if(activeTool != 1) return
        isDown = true;
        var pointer = canvas.getPointer(o.e);
        origX = pointer.x;
        origY = pointer.y;
        var pointer = canvas.getPointer(o.e);
        rect = new fabric.Rect({
            left: origX,
            top: origY,
            originX: 'left',
            originY: 'top',
            width: pointer.x-origX,
            height: pointer.y-origY,
            angle: 0,
            fill: boxColor,
            transparentCorners: true
        });
        canvas.add(rect);
    });

    canvas.on('mouse:move', function(o){
      if (!isDown) return;
      console.log(isDown, " mouse move")
      if(activeTool == 1) {
        var pointer = canvas.getPointer(o.e);
        
        if(origX>pointer.x){
          rect.set({ left: Math.abs(pointer.x) });
        }
        if(origY>pointer.y){
          rect.set({ top: Math.abs(pointer.y) });
        }
        
        rect.set({ width: Math.abs(origX - pointer.x) });
        rect.set({ height: Math.abs(origY - pointer.y) });
        
        
        canvas.renderAll();
      }
    });
    
    canvas.on('mouse:up', function(o){
      isDown = false;
    
      if(activeTool == 2) {
        var currentItem = canvas._objects.length - 1;
        if(canvas.item(currentItem).selectable == true)
          canvas.item(currentItem).selectable = false;
        
        canvas.renderAll();
      }
    });
    
    }

    return(
        <div style={{marginTop:props.canprops.marginTop}}>

            {/* <button onClick={onAddCircle}>Add circle</button> */}
            
            <canvas id="c" style={canStyle}></canvas>
            {/* <FabricJSCanvas className="sample-canvas" onReady={onReady} /> */}
    </div>
    )
}

export default Test