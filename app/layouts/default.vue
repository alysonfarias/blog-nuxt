<template>
    <nav>
        <li>
            <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/blog/teste">blog test</NuxtLink>
        </li>
    </nav>
    <div>
        <slot />
    </div>
</template>