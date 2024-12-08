import { Tabs } from "expo-router/tabs";

export const TabView = () => {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="home"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
    </Tabs>
  );
};
