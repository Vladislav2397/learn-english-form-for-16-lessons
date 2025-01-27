<template>
  <Flex gap="small" :align="'flex-start'" :justify="'flex-start'" vertical>
    <br />
    <p class="label">{{ label }}</p>
    <Flex gap="middle">
      <Input v-model:value="value" />
      <Button @click="check">check</Button>
    </Flex>
    <p class="label" v-if="state === 'error'">
        <Tag color="red">failure</Tag>
        This answer is incorrect (correct is <b>"{{ answers[0] }}"</b>)
    </p>
    <p class="label" v-if="state === 'valid'">
        <Tag color="green">success</Tag>
        It's correct
    </p>
  </Flex>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Input, Button, Flex, Tag } from "ant-design-vue";

const value = ref("");

const state = ref<"idle" | "valid" | "error">("idle");

function check() {
    console.log('answers', answers);
    console.log('value', value.value);

    if (answers.includes(value.value)) {
        state.value = "valid";
    } else {
        state.value = "error";
    }
}

const { label, answers } = defineProps<{ label: string; answers: string[] }>();
</script>

<style scoped>
.label {
    margin: 0;
}
</style>