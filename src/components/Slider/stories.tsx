import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';
import styled from 'styled-components';
import Slider from '.';

export default {
  title: 'Slider',
  component: Slider
} as Meta;

const HorizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SlideItem = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal: Story = () => (
  <Slider settings={HorizontalSettings}>
    <SlideItem>1</SlideItem>
    <SlideItem>2</SlideItem>
    <SlideItem>3</SlideItem>
    <SlideItem>4</SlideItem>
  </Slider>
);

const VerticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const Vertical: Story = () => (
  <Slider settings={VerticalSettings}>
    <SlideItem>1</SlideItem>
    <SlideItem>2</SlideItem>
    <SlideItem>3</SlideItem>
    <SlideItem>3</SlideItem>
  </Slider>
);
