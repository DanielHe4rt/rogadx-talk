<script setup lang="ts">

const props = defineProps({
    version: {
        type: String,
    },
    commits: {
        type: String,
    },
    currentContributors: {
        type: Array<String>,
    },
    newContributors: {
        type: Array<String>,
    },
    statistics: {
        type: Array<String>,
    },
})

const currentContributors = props.currentContributors?.map((contributor => "https://github.com/" + contributor + ".png"));

const newContributors = props.newContributors?.map((contributor => {
    const [name, handle] = contributor.split(';');
    
    return {
        name,
        handle,
        image: "https://github.com/" + handle + ".png"
    };
}));

const statistics = props.statistics?.map((statistic => {
    const [key, value] = statistic.split(';');
    
    return {
        key,
        value
    };
}));


</script>

<template>
    <div class='grid grid-cols-3 gap-4 slidev-layout default'>

        <div class='col-span-2 px-4'>
            <slot />
        </div>
        <div>
            <div>
                <h3 class="text-center"> Informações </h3>
                <table>
                    <tbody>
                        <tr>
                            <td> Versão</td>
                            <td class="text-right"> {{ props.version ?? "0.0.0"}}</td>
                        </tr>
                        <tr>
                            <td> Commits:</td>
                            <td class="text-right"> {{ props.commits ?? 0 }}</td>
                        </tr>
                    </tbody>
                </table>

                <h3 class="text-center mt-4"> Contribuidores </h3>

                <table>
                    <tbody>
                        <tr>
                            <td colspan="2">
                                <div class="flex justify-center -space-x-3  text-white ">
                                    <div v-for="contributor in currentContributors"
                                        :style="{ backgroundImage: `url('${contributor}')`, backgroundSize: 'contain' }"
                                        class="w-8 h-8 rounded-full shadow-lg ring-2 ring-white z-0 dark:ring-slate-900">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="statistics?.length">
                            <td colspan="2" class="text-center"> Estatisticas Gerais</td>
                        </tr>
                        <tr v-if="newContributors?.length">
                            <td colspan="2" class="text-center"> Novos Contribuidores</td>
                        </tr>
                        <tr v-for="statistic in statistics" :key="statistic.key">
                            <td>{{  statistic.key }}</td>
                            <td class="text-right">{{ statistic.value}}</td>
                        </tr>
                        <tr v-for="contributor in newContributors" :key="contributor.name">
                            <td>
                                <div class="flex justify-between">
                                    <div class="flex gap-2">
                                        <img class="w-10 h-10" :src="contributor.image">
                                        <div class="flex flex-col">
                                            <span class="text-sm">{{ contributor.name }}</span>
                                            <span class="text-xs">{{ contributor.handle }}</span>
                                        </div>
                                    </div>
                                    <mdi-github class="text-3xl" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style>
td {
    font-size: medium
}
</style>