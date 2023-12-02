import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Link = ({ title, action }) => {
    return (
        <TouchableOpacity onPress={action} style={styles.link}>
            <Text style={styles.linkText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        marginTop: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'blue',
    },
    linkText: {
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default Link;
