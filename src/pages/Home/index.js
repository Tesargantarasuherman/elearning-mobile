import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fonts } from '../../utils'
import { Button, Input } from '../../components'
import { IconSearch, IconSort } from '../../assets'
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const Home = () => {
  // const sheetRef = useRef<BottomSheet>(null);

  // // variables
  // const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // // callbacks
  // const handleSheetChange = useCallback((index) => {
  //   console.log("handleSheetChange", index);
  // }, []);
  // const handleSnapPress = useCallback((index) => {
  //   sheetRef.current?.snapToIndex(index);
  // }, []);
  // const handleClosePress = useCallback(() => {
  //   sheetRef.current?.close();
  // }, []);
  return (
    <View style={styles.body}>
      <View style={styles.hallo}>
        <Text>Hello,</Text>
        <Text style={styles.profileName}>Tesar Gantara Suherman</Text>
      </View>
      <ScrollView>
        <View style={styles.input}>
          <IconSearch />
          <TextInput placeholder='Discover' style={styles.textInput} />
          <IconSort onPress={() => alert('Jalan')} />
        </View>
      </ScrollView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ maxHeight: 70 }}>
        <View style={styles.containerCard}>
          <View style={styles.bodyCard}>
            <Image source=
              {{ uri: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
              style={styles.image}
            />
            <Text style={styles.titleCard}>Mountain</Text>
          </View>
        </View>
        <View style={styles.containerCard}>
          <View style={styles.bodyCard}>
            <Image source=
              {{ uri: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
              style={styles.image}
            />
            <Text style={styles.titleCard}>Mountain</Text>
          </View>
        </View>
        <View style={styles.containerCard}>
          <View style={styles.bodyCard}>
            <Image source=
              {{ uri: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
              style={styles.image}
            />
            <Text style={styles.titleCard}>Mountain</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{ flex: 4 }}>
        <Text>
          Discover
        </Text>
      </View>
      <View style={{ flex: 6 }}>

      </View>
      {/* <BottomSheetView
         ref={sheetRef}
         snapPoints={snapPoints}
         onChange={handleSheetChange}
         >
        <Text>Awesome 🔥</Text>
      </BottomSheetView> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 40
  },
  hallo: {
    flex: 2
  },
  profileName: {
    fontSize: 18,
    fontFamily: fonts.primary[900],
    marginBottom: 40
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#dddddd',
    borderWidth: 1,
    maxHeight: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1
  },
  containerCard: {
    width: 120,
    backgroundColor: '#D43E2A',
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 10
  },
  bodyCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleCard: {
    marginLeft: 10,
    color: 'white',
    fontStyle: fonts.primary[900],
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
})