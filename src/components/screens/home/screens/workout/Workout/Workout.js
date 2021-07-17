import { Text, View, StyleSheet, FlatList, Animated, TouchableOpacity, Alert, Modal } from "react-native";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { getColor } from "../../../../../../../assets/colors/color";
import ExerciseCard from "./components/ExerciseCard";
import Paginator from "./components/Paginator";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";


const Workout = ({ navigation, selectedWorkout }) => {

  // FlatList
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const [isPaused, setIsPaused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  // timer
  const timer = (time) => {
    return (

      <CountdownCircleTimer
        isPlaying={isPaused}
        size={50}
        strokeWidth={5}
        duration={10}
        trailColor={'white'}
        onComplete={() => { setIsPaused(false); return [true, 0]}}
        colors={[
          [getColor().primary, 1.0],
        ]}
      >
        {({ remainingTime }) => (
          <Animated.Text style={{ color: getColor().background }}>
            { isPaused ? remainingTime : null }
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    )
  }



  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
          </View>
        </View>

      </Modal>

      <View style={styles.topContainer}>

        {/*Workout Title */}
        <Text style={styles.workoutName}>{selectedWorkout.name}</Text>

        {/*  rest button */}
        <View style={styles.restButton}>
          <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
            <View style={styles.icon}/>
            <View style={styles.timer}>{timer(10)}</View>

            <View style={styles.pauseIcon}>
              {isPaused ? null : <MaterialIcons name={"pause"} color={getColor().background} size={26} />}
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
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
          <View style={styles.paginator}>
            <Paginator data={selectedWorkout.exercises} scrollX={scrollX}/>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.finishButton}>
                <Text style={styles.buttonText}>Finish Workout </Text>
                <MaterialIcons name={'check-circle-outline'} size={26} color={getColor().primary}/>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  navigation: ownProps.navigation,
  selectedWorkout: state.workout.selectedWorkout,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workout);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
  },
  topContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  contentContainer: {
  },
  listContainer: {
  },

  // modal
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  modalContentContainer: {
    marginTop: 100,
    marginHorizontal: 20,
    padding: 50,
    backgroundColor: getColor().background,
    opacity: 1,
    borderRadius: 20,
  },

  // buttons
  restButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    position: 'absolute',
    marginTop: -10,
    marginLeft: -10,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: 'DMSans-Medium',
    color: getColor().primary,
  },
  icon: {
    backgroundColor: getColor().primary,
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  pauseIcon: {
    position: 'absolute',
    marginLeft: 2,
    marginTop: 2,
  },

  buttonContainer: {
    alignItems: 'center',
  },

  finishButton: {
    backgroundColor: getColor().background,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: getColor().secondary,
    paddingHorizontal: 13,
    borderRadius: 20,
  },

  workoutName: {
    fontSize: 40,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
    alignSelf: 'center',
  },
  paginator: {
    marginTop: 50,
    alignSelf: 'center',
  },
})
