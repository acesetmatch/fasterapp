import React from "react";
import { AsyncStorage, Alert, Keyboard } from "react-native";

export default class DeviceStorage {
  static async getItem(key: string) {
    try {
      const item: string | null = await AsyncStorage.getItem(key);
      return item;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async saveItem(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      Alert.alert("Error saving item");
    }
  }
}
