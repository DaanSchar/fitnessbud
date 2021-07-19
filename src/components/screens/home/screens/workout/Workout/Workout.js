import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableWithoutFeedback, ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { getColor } from "../../../../../../../assets/colors/color";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Carousel from "./components/Carousel";

/**
 * TODO: fix little gray border on the bottom of the screen
 * ( no, not the navigation border,there seems to be a border in the actual workout screen.)
 */

const Workout = ({ navigation, selectedWorkout, isFinished}) => {

  // modal
  const [modalVisible, setModalVisible] = useState(false);

  // rest button
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(90);
  const [key, setKey] = useState(0);

  function incrementTime() {
    setTime(time + 15)
    setKey(key + 1);
    setIsPaused(false);
  }

  function decrementTime(){
    if (time > 15)
      setTime(time - 15);
    setIsPaused(false);
    setKey(key + 1);
  }

  function getTime() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    if (seconds > 0)
      return minutes.toString() + ':' + seconds.toString();
    return minutes.toString() + ':00';
  }

  const timer = () => {
    return (
      <CountdownCircleTimer
        isPlaying={isPaused}
        size={50}
        key={key}
        strokeWidth={5}
        duration={time}
        trailColor={'white'}
        onComplete={() => { setTimeout(function() {setIsPaused(false);setKey(key + 1)}, 1000);return [false, 0]}}
        colors={[[getColor().primary, 1.0],]}
      >
        {({ remainingTime }) => (
          <Animated.Text style={{ color: getColor().background }}>
            { isPaused ? remainingTime : null }
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    )
  }

  const modal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
            <View style={styles.modalTopContainer}>
              <Text style={styles.modalTitle}>Set Rest Time</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Feather style={{}} name={'x'} size={32} color={getColor().textLight}/>
              </TouchableOpacity>
            </View>
            <View style={styles.timerContainer}>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => incrementTime()}>
                  <View style={styles.modalButton}>
                    <Feather name={'plus'} size={35} color={getColor().background}/>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.timeContainer}>
                <Text style={styles.timerTitle}>{ getTime() }</Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => decrementTime()}>
                  <View style={styles.modalButton}>
                    <Feather name={'minus'} size={35} color={getColor().background}/>
                  </View>
                </TouchableOpacity>
              </View>

              <View>

              </View>
            </View>
          </View>
        </View>

      </Modal>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        {/* Timer  Modal */}
        { modal() }

        <View style={styles.topContainer}>

          {/*Workout Title */}
          <Text style={styles.workoutName}>{selectedWorkout.name}</Text>

          {/*  rest button */}
          <View style={styles.restButton}>
            <TouchableOpacity onPress={() => setIsPaused(!isPaused)} onLongPress={() => setModalVisible(true)}>
              <View style={styles.icon}/>

              <View style={styles.timer}>
                {timer()}
              </View>

              <View style={styles.pauseIcon}>
                {isPaused ? null : <MaterialIcons name={"pause"} color={getColor().background} size={26} />}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Flat list */}
        <Carousel selectedWorkout={selectedWorkout}/>

        {/* Finish Button*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={[styles.finishButton, isFinished ? { borderColor: getColor().success } : null ]}>
              <Text style={[styles.buttonText, isFinished ? { color: getColor().success } : null ]}>Finish Workout </Text>
              <MaterialIcons name={'check-circle-outline'} size={26} color={isFinished ? getColor().success : getColor().primary}/>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state, ownProps) => ({
  navigation: ownProps.navigation,
  selectedWorkout: state.workout.selectedWorkout,
  isFinished: state.activeWorkout.isFinished,
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

  // modal
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  modalContentContainer: {
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: getColor().background,
    opacity: 1,
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 25,
    fontFamily: 'DMSans-Medium',
    color: getColor().primary,
    marginTop: 20,
    marginLeft: 75,
  },
  modalButton: {
    borderRadius: 100,
    backgroundColor: getColor().primary,
  },
  timerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timerTitle: {
    fontSize: 25,
    fontFamily: 'DMSans-Medium',
    color: getColor().primary,
  },
  timeContainer: {
    width: 100,
    alignItems: 'center',
  },
  modalTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
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
    marginBottom: 30,
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
})
