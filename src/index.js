import ReactDOM from 'react-dom'
import React, { Component, useRef, useState  } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import {OrbitControls , RoundedBox,Text , softShadows  } from '@react-three/drei'
import { RGBA_ASTC_10x10_Format, RGBA_ASTC_4x4_Format ,planeBufferGeometry} from 'three'
import Logic from './cubeLogic'
import TestBox from './notsogoodbox';
import "./index.css"
import Button from "./appButton"



class TestCubeLogic extends Component{
  constructor(props){
    super(props)
      let temp = Logic.initialMatrix()
      console.log(temp)

    this.state = {
      colorArray:temp,
      blockArr:Logic.initCube(temp)
      };
    }

  Handler = (action) => {
    let res =''
    if (action==="UP"){
      res = Logic.UP(this.state.colorArray)
    }
    else if (action=="UP_R"){
      res = Logic.UP_R(this.state.colorArray)
    }
    else if (action=="Right"){
      res = Logic.Right(this.state.colorArray)
    }
    else if (action=="Right_R"){
      res = Logic.Right_R(this.state.colorArray)
    }
    else if (action=="Left"){
      res = Logic.Left(this.state.colorArray)
    }
    else if (action=="Left_R"){
      res = Logic.Left_R(this.state.colorArray)
    }
    else if (action=="Front"){
      res = Logic.Front(this.state.colorArray)
    }
    else if (action=="Front_R"){
      res = Logic.Front_R(this.state.colorArray)
    }
    else if (action=="Down"){
      res = Logic.Down(this.state.colorArray)
    }
    else if (action=="Down_R"){
      res = Logic.Down_R(this.state.colorArray)
    }
    let temp = Logic.updateCube(res,this.state.blockArr)
    this.setState({colorArray:res})
    this.setState({blockArr:temp})
    }
  
  

  resetHandler = () => {
    const res = Logic.initialMatrix()
    let temp = this.state.blockArr
    temp = Logic.updateCube(res,this.state.blockArr)
    this.setState({colorArray:res})
    this.setState({blockArr:temp})
  }



  Box = (props) => {
    console.log("box")
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    const[edgeColor,setEdge] = useState(props.colors)

    // Rotate mesh every frame, this is outside of React without overhead
    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    return (
  <mesh
    {...props}
    
    scale={[0.95,0.95,0.95]}
    castShadow>
      <boxBufferGeometry    />
      {/* <meshStandardMaterial color={'blue'}></meshStandardMaterial> */}
  
      {/* <meshBasicMaterial attachArray="material" color={edgeColor[1]} />
      <meshBasicMaterial attachArray="material" color={edgeColor[3]} />
      <meshBasicMaterial attachArray="material" color={edgeColor[4]} />
      <meshBasicMaterial attachArray="material" color={edgeColor[5]} />
      <meshBasicMaterial attachArray="material" color={edgeColor[0]} />
      <meshBasicMaterial attachArray="material" color={edgeColor[2]} /> */}

      <meshPhongMaterial attachArray="material" color={edgeColor[1]} />
      <meshPhongMaterial attachArray="material" color={edgeColor[3]} />
      <meshPhongMaterial attachArray="material" color={edgeColor[4]} />
      <meshPhongMaterial attachArray="material" color={edgeColor[5]} />
      <meshPhongMaterial attachArray="material" color={edgeColor[0]} />
      <meshPhongMaterial attachArray="material" color={edgeColor[2]} />
  </mesh>
  )
}
  render() {
   
    return(
      <div style={{flexDirection:"row", display:"flex"}}>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}
        style={{backgroundColor:"#333533", height:700 , width:1500 , flex:0.95}}>
        {/* This light makes things look pretty */}
        <ambientLight intensity={0.5} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[1, 2, 1]}
          intensity={0.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, 10, 0]} intensity={0.2} />

        <group>
      <mesh receiveShadow rotation={[-Math.PI /2,0,0]} position={[0,-5,0]}>
      <planeBufferGeometry attach='geometry' args={[100,100]}> </planeBufferGeometry>
      <meshPhongMaterial color={"#333533"} />
      {/* <shaderMaterial attach='material'/> */}
      </mesh>
      </group>
        
        <this.Box position={[-1, -1, 1]} /* Orange bottom Layer */
            colors={this.state.blockArr[0].stateArr} /> 
        <this.Box position={[0, -1, 1]}
            colors={this.state.blockArr[1].stateArr} />
        <this.Box position={[1, -1, 1]}
            colors={this.state.blockArr[2].stateArr} /> 

        <this.Box position={[-1, 0, 1]} /* Orange mid Layer */
            colors={this.state.blockArr[3].stateArr} /> 
        <this.Box position={[0, 0, 1]}
            colors={this.state.blockArr[4].stateArr} /> 
        <this.Box position={[1, 0, 1]}
            colors={this.state.blockArr[5].stateArr} /> 

        <this.Box position={[-1, 1, 1]} /* Orange top Layer */
            colors={this.state.blockArr[6].stateArr} /> 
        <this.Box position={[0, 1, 1]}
            colors={this.state.blockArr[7].stateArr} /> 
        <this.Box position={[1, 1, 1]}
            colors={this.state.blockArr[8].stateArr} /> 

        <this.Box position={[1, -1, -1]} /* red bottom Layer */
            colors={this.state.blockArr[9].stateArr} /> 
        <this.Box position={[0, -1, -1]}
            colors={this.state.blockArr[10].stateArr} />
        <this.Box position={[-1, -1, -1]}
            colors={this.state.blockArr[11].stateArr} /> 

        <this.Box position={[1, 0, -1]} /* red mid Layer */
            colors={this.state.blockArr[12].stateArr} /> 
        <this.Box position={[0, 0, -1]}
            colors={this.state.blockArr[13].stateArr} />
        <this.Box position={[-1, 0, -1]}
            colors={this.state.blockArr[14].stateArr} /> 

        <this.Box position={[1, 1, -1]} /* red top Layer */
            colors={this.state.blockArr[15].stateArr} /> 
        <this.Box position={[0, 1, -1]}
            colors={this.state.blockArr[16].stateArr} />
        <this.Box position={[-1, 1, -1]}
            colors={this.state.blockArr[17].stateArr} /> 

        <this.Box position={[1, -1, 0]} /* inner right Layer */
            colors={this.state.blockArr[18].stateArr} /> 
        <this.Box position={[1, 0, 0]}
            colors={this.state.blockArr[19].stateArr} />
        <this.Box position={[1, 1, 0]}
            colors={this.state.blockArr[20].stateArr} /> 

        <this.Box position={[0, 1, 0]} /* inner upper Layer */
            colors={this.state.blockArr[21].stateArr} /> 
        <this.Box position={[-1, 1, 0]}
            colors={this.state.blockArr[22].stateArr} />

        <this.Box position={[-1, 0, 0]} /* inner left Layer */
            colors={this.state.blockArr[23].stateArr} /> 
        <this.Box position={[-1, -1, 0]}
            colors={this.state.blockArr[24].stateArr} />

        <this.Box position={[0, -1, 0]} /* inner bottom Layer */
            colors={this.state.blockArr[25].stateArr} /> 



      


        <OrbitControls></OrbitControls>    
      </Canvas>
      <div id="buttonContainer" style={{backgroundColor:'#333533' ,height:700, width:300 , flex:0.25} }>
      <div style={{alignItems:"center", justifyContent:"center"}}>
      <button onClick={() => this.Handler("UP")}> up</button>
      <button onClick={() => this.Handler("UP_R")}> up reverse</button>
      </div>
      <div>
      <button onClick={() => this.Handler("Right")}> right</button>
      <button onClick={() => this.Handler("Right_R")}> right reverse</button>
      </div>
      <div>
      <button onClick={() => this.Handler("Left")}> left</button>
      <button onClick={() => this.Handler("Left_R")}> left reverse</button>
      </div>
      <div>
      <button onClick={() => this.Handler("Front")}> front</button>
      <button onClick={() => this.Handler("Front_R")}> front reverse</button>
      </div>
      <div>
      <button onClick={() => this.Handler("Down")}>down</button>
      <button onClick={() => this.Handler("Down_R")}> down reverse</button>
      </div>
      <button onClick={this.resetHandler} style={{marginLeft:80}}> Reset</button>



      </div>


      </div>
    )
  }
}



ReactDOM.render(
  <TestCubeLogic></TestCubeLogic>,

  document.getElementById('root'))