<script>
    function create() {}
    async function open() {
        const file = await showOpenFilePicker();
    }
</script>

<svelte:head>
    <title>Meta Net</title>
</svelte:head>

<div class="box-fill divide-(y solid hue-6)">
    <div class="flex">
        <div class="flex flex-1 items-center p-2 gap-2">
            <img class="size-6" src="/logo.svg" alt="Logo" />
            <div class="flex-1 font-500">Meta Net</div>
        </div>
        <button
            class="flex items-center px-2 gap-2 @hover:bg-hue-5 active:ring-(2 inset base-12)"
            onclick={create}
        >
            <div class="i-mdi:add"></div>
            <div>新建</div>
        </button>
        <button
            class="flex items-center px-2 gap-2 @hover:bg-hue-5 active:ring-(2 inset base-12)"
            onclick={open}
        >
            <div class="i-mdi:file-open-outline"></div>
            <div>打开</div>
        </button>
    </div>
    <div class="box-fill"></div>
</div>
