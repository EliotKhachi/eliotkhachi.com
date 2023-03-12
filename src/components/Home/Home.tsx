import {StyleSheet, View, Text, ImageBackground, Image} from "react-native"
import React from "react"
let portraitImageSource: any = require("../../../assets/0J0A7154-headshot.jpg")

export default function Home() {
    return(
           <View>
<View style={{}}>
            </View>
            <View style={{flexDirection:  "row", justifyContent: "flex-start"}}>
                <Image style={styles.portrait} source={portraitImageSource}/>
                <View style={styles.aboutMe}>
            </View>
                
            </View>

           </View> 
            )
}
const styles = StyleSheet.create({
    portrait: {
        width: 400,
        height: 400,
        borderRadius: 400,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: "gray",
        transform: [{rotate: '0deg'}]
        // filter: "grayscale(100%)"
    },
    aboutMe: {
        width: 600,
        height: 800,
        backgroundColor: "black",
        borderRadius: 100,
    }
})
