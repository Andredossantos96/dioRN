import React from "react";
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub ='#C9D1D9';
const colorDarkFontGithub ='#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86696902?v=4'
const urlToMyGithub = 'https://github.com/Andredossantos96'
const App = () => {
    const handlePressGoToGithub = async () =>{
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image 
                accessibilityLabel="André na cozinha com um fundo branco" 
                style={style.avatar} 
                source={{uri: imageProfileGithub}}
                />
                <Text 
                accessibilityLabel="Nome: André dos Santos" 
                style={[style.defaultText, style.name]}>
                André dos Santos
                </Text>
                <Text 
                accessibilityLabel="Nickname: Andredossantos96" 
                style={[style.defaultText, style.nickname]}>
                Andredossantos96
                </Text>
                <Text
                accessibilityLabel="Descrição: Estudante de Sistemas de Informação | Front-end | Mobile
                ASP.NET Core | C# | Kotlin | React Native | Python | SQL Server"
                style={[style.defaultText, style.description]}>Estudante de Sistemas de Informação | Front-end | Mobile
                ASP.NET Core | C# | Kotlin | React Native | Python | SQL Server 
                </Text>

                <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>
                        Open in Github
                    </Text>
                </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { 
        // Colunn
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    

});


