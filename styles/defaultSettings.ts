import { DefaultTheme, Theme } from "@react-navigation/native";

export const colors = {
    primary: "#f5a623",
    dark: "#121212",
    light: "#f0f0f0",
    theme: "#21242c",
    muted: "#9ea0a3",
}

export const darkTheme: Theme = {
    dark: true,
    colors: {
    ...DefaultTheme.colors,
      background: DefaultTheme.colors.text,
      card: DefaultTheme.colors.text,
      text: DefaultTheme.colors.background,
      border: DefaultTheme.colors.background,
      notification: DefaultTheme.colors.background,
    },
}

export const lightTheme: Theme = {
    dark: false,
    colors: DefaultTheme.colors,
}

export default colors;