import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Container, Body, Footer } from "./styles";

// https://dribbble.com/shots/16361858-Weather-Forecast-Mobile-application

export function Welcome() {
  const animation = useRef();

  return (
    <Container>
      <Body>
        <LottieView
          style={{
            width: 240,
            height: 240,
          }}
          autoPlay
          source={require("../../../assets/weather.json")}
        />
        <Text size={36}>
          Weather{" "}
          <Text size={36} color="yellow">
            News & Feed
          </Text>
        </Text>
        <Text>Here you can find info about all</Text>
      </Body>
      <Footer>
        <Button>
          <Text color="#18194d">Get started!</Text>
        </Button>
      </Footer>
    </Container>
  );
}
