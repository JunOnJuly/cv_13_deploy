import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PCDLoader } from 'three-stdlib'
import * as s from "./navThree_css";

function Points(props) {
  const points = useLoader(PCDLoader, 'RGB1.pcd')
  return <primitive object={points} {...props} />
}

export default function navThree() {
  return (
    <s.navBackground>
      <Canvas
      camera={{ position: [0.01, 0, 0]}}>
        <Points rotation={[Math.PI/2, Math.PI, Math.PI/2]} material-size={0.05} material-color="white" />
        <OrbitControls />
      </Canvas>
    </s.navBackground>
  )
}