import * as React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import * as slice from '../store/slices/userDataSlice'
import { useDispatch } from 'react-redux'
import routes from '../routes'

export default function TelaMenu() {
    const dispatch = useDispatch()
    const navigate = useNavigation().navigate
    const user = useSelector(slice.selectUserData)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {/* insert your code here */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    example: {
        margin: 32,
    },
});