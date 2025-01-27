<template>
<div class="root">
    <slot />
</div>
</template>

<style lang="scss" scoped>
.root {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>