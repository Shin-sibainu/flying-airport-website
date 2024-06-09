import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";

export default function TextSection({ title, subtitle, ...props }) {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          lineHeight={1.4}
          font={"./fonts/Gen Jyuu Gothic Monospace Bold.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.2}
        maxWidth={2}
        lineHeight={0.76} // font={"./fonts/Inter-Regular.ttf"}
        font={"./fonts/Gen Jyuu Gothic Monospace Bold.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
}
