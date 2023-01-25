import { Pressable, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image, ImageBackground } from 'react-native-web'
import types from '../data/types'

const backGroundImage = {
    uri: "https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Pathaan-cover-news.jpg",
    height: 170,
    width: "100%"
}
const Header = () => {
    const [movieName, setMovieName] = useState('');
    return (
        <View>
            <Image source={backGroundImage} />
            <View style={styles.upcomingCard}>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>Releasing in 1 Day</Text>
                <View style={styles.upcomingMovieContainer}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pathaan</Text>
                        <Text style={{ fontSize: 16, fontWeight: "400", color: "gray", marginTop: 4, }} >Release : 25/01/2023</Text>
                        <Text style={{ fontSize: 16, fontWeight: "400", color: "gray", marginTop: 4, }} >2h 26m ‧ Hindi</Text>
                    </View>
                    <Pressable style={styles.upcomingBookButton}>
                        <Text style={styles.upcomingButtonText} >Book Now</Text>
                    </Pressable>
                </View>
                <Text style={styles.upcomingGenre}>Drama/Mystery</Text>
            </View>


            <View style={{ marginTop: 100 }} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {types.map((item, index) => (
                    <View style={{ margin: 10, borderColor: "#C0C0C0", borderWidth: 0.4, borderRadius: 4, padding: 10 }} key={index}>
                        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "500", paddingVertical: 0.01 }}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    upcomingCard: {
        backgroundColor: 'white',
        position: 'absolute',
        marginLeft: '10%',
        width: "80%",
        border: "1px solid white",
        borderRadius: 4,
        padding: 10,
        top: 110,
    },
    upcomingMovieContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    upcomingBookButton: {
        backgroundColor: 'red',
        color: 'black',
        padding: 10,
        borderRadius: 4,
        marginLeft: 'auto',
        marginRight: 0,
    },
    upcomingGenre: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "400",
        color: "gray",
    },
    upcomingButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }

})