import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import { Text } from "../../components/Text";
import { Body, Container } from "./styles";

// https://dribbble.com/shots/16361858-Weather-Forecast-Mobile-application

export function Dashboard() {
  const animation = useRef();

  return (
    <Container>
      <Body>
        <Text size={20}>
          Weather info{" | "}
          <Text size={20} color="yellow">
            Today
          </Text>
        </Text>
        <LottieView
          style={{
            width: 240,
            height: 240,
          }}
          autoPlay
          speed={0.2}
          source={require("../../../assets/night-few-clouds.json")}
        />

        <Text size={32} color="white">
          32
          <Text size={16} color="yellow">
            C
          </Text>
        </Text>
        <Text size={16} color="white">
          Timburi, São Paulo
        </Text>

        <Text size={20} color="yellow">
          Next seven days
        </Text>
      </Body>
    </Container>
  );
}
