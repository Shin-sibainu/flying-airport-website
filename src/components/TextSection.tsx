import { Text } from "@react-three/drei";

export default function TextSection({ title, subtitle, ...props }) {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color={"white"}
          anchorX={"left"}
          anchorY={"bottom"}
          lineHeight={1}
          fontSize={0.52}
          maxWidth={2.5}
          //   font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
        </Text>
      )}
      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.22}
        maxWidth={2.5}
        // font={"./fonts/Inter-Regular.ttf"}
      >
        {subtitle}
      </Text>
    </group>
  );
}
