import React, { useRef, useState } from "react";
import { Animated, FlatList, View, StyleSheet } from "react-native";
import ExerciseCard from "./ExerciseCard";
import Paginator from "./Paginator";

const Carousel = ({ selectedWorkout }) => {

  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <View style={styles.container}>

      <FlatList data={selectedWorkout.exercises}
                keyExtractor={(exercise) => exercise.id}
                horizontal
                pagingEnabled
                bounce={false}
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX } } }], {
                  useNativeDriver: false,
                })}
                renderItem={ ({ item } ) => (
                  <ExerciseCard exercise={item}/>
                )}/>

      {/* Paginator */}
      <View style={styles.paginator}>
        <Paginator data={selectedWorkout.exercises} scrollX={scrollX}/>
      </View>

    </View>
  )
}

export default (Carousel);

const styles = StyleSheet.create({
  paginator: {
    marginTop: 50,
    alignSelf: 'center',
  },
})
