import React from "react";
import { Box } from "@mantine/core";
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

interface CardProps {
  [key: string]: any;
}

interface CarrousselProps {
  cards: CardProps[];
  offset: number;
  showArrows: boolean;
  width?: string;
  height: string;
  margin: string;
}

export default function Carroussel(props: CarrousselProps) {
  const [offsetRadius, setOffsetRadius] = useState<number>(2);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [goToSlide, setGoToSlide] = useState<number | undefined>(0);
  const [cards] = useState<CardProps[]>([]);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    const table = props.cards.map((element, index) => ({
      ...element,
      onClick: () => setGoToSlide(index),
    }));
    setGoToSlide(0);
    cards.splice(0, cards.length, ...table);
  }, [props.cards]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prevSlide) => {
        const nextSlide = (prevSlide || 0) + 1;
        return nextSlide >= cards.length ? 0 : nextSlide;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [cards]);

  return (
    <Box
      className="w-full sm:w-[80%] lg:w-[60%] xl:w-[50%]"
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards.map((card, index) => ({ ...card, key: index }))}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </Box>
  );
}
