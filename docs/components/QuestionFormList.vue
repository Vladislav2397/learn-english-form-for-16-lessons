<template>
  <div>
    <div v-for="(word, index) in data">
      <h3>{{index + 1}}. {{word.title}}</h3>
         <QuestionsLayout v-for="item in word.forms" :key="item.label">
            <QuestionForm
                :key="item.label"
                :label="item.label"
                :answers="item.answers"
            />
         </QuestionsLayout>
      <br />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import QuestionForm from "./QuestionForm.vue";
import QuestionsLayout from "./QuestionsLayout.vue"

const { data } = defineProps<{
    data: {
        title: string
        forms: {
            label: string
            answers: string[]
        }[]
    }[]
}>();
</script>