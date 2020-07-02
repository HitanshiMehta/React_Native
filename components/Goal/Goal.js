import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import AddGoal from './AddGoal';
import GoalItem from './GoalItem';

const Goal = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false)
    const handleDelete = goalId => {
        setCourseGoals(currentGoal => {
            return currentGoal.filter(goal => goal.uid !== goalId)
        })
    }
    const handleAddMode = () => {
        setIsAddMode(true)
    }
    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={handleAddMode} />
            <AddGoal
                courseGoals={courseGoals}
                setCourseGoals={setCourseGoals}
                isAddMode={isAddMode}
                setIsAddMode={setIsAddMode}
            />
            <FlatList
                keyExtractor={(item) => item.uid}
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        goal={itemData.item}
                        onDelete={handleDelete}
                    />
                )} />
        </View>
    );
}

export default Goal;

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    }
});