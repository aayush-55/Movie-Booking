import { FlatList, StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import malls from '../data/malls'
const MovieScreen = () => {
    const mallsData = malls;
    const route = useRoute();
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState('');
    const [mall, setMall] = useState([]);
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons onPress={() => navigation.goBack()} style={{ marginLeft: 5 }} name="arrow-back" size={24} color="black" />
                    <Text style={{ fontSize: 17, fontWeight: '600', marginLeft: 5 }}>{route.params.name}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                    <Ionicons name="search" size={24} color="black" />
                    <Ionicons style={{ marginHorizontal: 10 }} name="ios-filter-outline" size={24} color="black" />
                    <Ionicons name="share-outline" size={24} color="black" />
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: 5, marginTop: 10 }}>
                <AntDesign name="Safety" size={24} color="orange" />
                <Text style={{ paddingLeft: 5, paddingTop: 4 }}>Your safety is our priority</Text>
            </View>
            <HorizontalDatepicker
                mode="gregorian"
                startDate={new Date('2023-01-26')}
                endDate={new Date('2023-02-28')}
                initialSelectedDate={new Date('2023-01-25')}
                onSelectedDateChange={(date) => setSelectedDate(date)}
                selectedItemWidth={170}
                unselectedItemWidth={38}
                itemHeight={38}
                itemRadius={10}
                selectedItemTextStyle={styles.selectedItemTextStyle}
                unselectedItemTextStyle={styles.selectedItemTextStyle}
                selectedItemBackgroundColor="#222831"
                unselectedItemBackgroundColor="#ececec"
                flatListContainerStyle={styles.flatListContainerStyle}
            />

            {mallsData.map((item, index) => (
                <Pressable onPress={() => {
                    setMall(item.name);
                }}
                    style={{ margin: 10 }} key={index}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
                    {mall.includes(item.name) ? (
                        <FlatList
                            numColumns={3}
                            data={item.showtimes}
                            renderItem={({ item }) => (
                                <Pressable style={{ borderColor: 'green', borderWidth: 0.5, margin: 10, padding: 10, borderRadius: 6, width: 100 }}>
                                    <Text style={{ fontSize: 15, color: 'green', textAlign: 'center' }}>{item}</Text>
                                </Pressable>
                            )}

                        />
                    ) : (
                        null
                    )}
                </Pressable>
            ))}

        </SafeAreaView>
    )
}

export default MovieScreen

const styles = StyleSheet.create({
})


