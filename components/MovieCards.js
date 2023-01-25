import { Pressable, StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import movies from '../data/movies'
import { useNavigation } from '@react-navigation/native'



const SingleCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable showsVerticalScrollIndicator={false} style={{ margin: 10, marginHorizontal: 15 }}>
                <Image style={styles.singleCardImage} source={{ uri: item.image }} />
                <Text style={styles.singleCardTitle}>{item.name.substr(0, 16)}</Text>
                <Text style={styles.singleCardLanguage}>U/A ‧ {item.language}</Text>
                <Text style={styles.singleCardGenre}>{item.genre}</Text>
                <Pressable onPress={() => navigation.navigate('MovieScreen', { name: item.name })} style={styles.singleCardButton} >
                    <Text style={styles.singleCardButtonText}>Book Now</Text>
                </Pressable>
            </Pressable>
        </View>
    )

}


const MovieCards = () => {
    // const navigation = useNavigation();
    const data = movies;
    return (
        <View>
            <ScrollView >
                <FlatList
                    data={data}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <SingleCard item={item} />
                    )}
                />
            </ScrollView>

        </View>
    )
}
export default MovieCards






const styles = StyleSheet.create({
    singleCardTitle: {
        fontSize: 16,
        fontWeight: "600",
        width: 170,
        marginTop: 10,
    },
    singleCardImage: {
        width: 170,
        height: 240,
        borderRadius: 6,
    },
    singleCardLanguage: {
        fontSize: 14,
        color: "gray",
        marginTop: 4,
    },
    singleCardGenre: {
        fontSize: 14,
        color: "gray",
        marginTop: 4,
        fontWeight: "500",
    },
    singleCardButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 6,
        marginTop: 10,
    },
    singleCardButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "white",
        textAlign: "center",
    }
})
