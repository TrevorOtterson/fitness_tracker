const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    required: "Enter an exercise name"
                },
                duration: {
                    type: Number,
                    required: "Enter an exercise duration in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        // converts date type into a string
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;