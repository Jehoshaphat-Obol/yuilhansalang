<script lang="ts">
    import { DotLottieSvelte } from "@lottiefiles/dotlottie-svelte";
    import { onMount } from "svelte";
    import { Confetti } from "svelte-confetti";

    let emojis = {
        question:
            "https://lottie.host/7cf79a73-ccf9-4dc8-a5f8-55b874bbb1dc/fQyA5Ws4oj.lottie",
        cry: "https://lottie.host/6c308245-f609-448c-b0db-c656838f27ac/qrwRCKU9Yt.lottie",
        wonder: "https://lottie.host/3df39625-e9fa-495a-8ced-0b06d1a91cf6/O0KMTtRZlW.lottie",
        blush: "https://lottie.host/df014cf4-01ae-431b-ad8b-075c3902598a/Di7GacaE6l.lottie",
        kiss: "https://lottie.host/e9090cbc-fae6-4acb-afd6-7bd29f550524/AaUPMA3h28.lottie",
        blissfull:
            "https://lottie.host/5e9e34ea-a554-4d55-9ab6-fc3ce46ec078/FbKYE1z0rY.lottie",
    };

    let active = $state(emojis.question);
    let x = $state(8);
    let y = $state(0);
    let yScale = $state(1);
    let xScale = $state(1);
    let yes = $state(false);
    let off = $state(false);
    let rotation = $state(0);
    let opacity = $state(1);

    $effect(()=>{
        off = yes
        if(yes){
            setTimeout(()=>{
                off = !yes
            }, 5000)
        }
    })

    function sheSaidNo() {
        if (!yes) {
            x = ((Math.random() * 2 - 1) * window.innerWidth) / 2;
            y = ((Math.random() * 2 - 1) * window.innerHeight) / 2;

            y = Math.min(y, 50);
            x = Math.min(x, 80);

            xScale = xScale * 0.9;
            yScale = yScale * 1.1;
            active = emojis.cry;
        }
    }

    onMount(() => {});

    function sheSaidYes() {
        yes = true;
        rotation = 720
        y = -200
        opacity = 0
        active = emojis.wonder
        setTimeout(() => {
            active = emojis.kiss
        }, 3000);
        setTimeout(() => {
            active = emojis.blissfull
        }, 6000);
    }
</script>

<div class="flex flex-col items-center h-screen justify-center">
    <div class="container h-72 w-72">
        <DotLottieSvelte src={active} loop autoplay />
    </div>
    <div class="flex flex-col items-center">
        <p class="mb-4 text-2xl sm:text-3xl font-semibold">
            Will you be my valentine?
        </p>
        <div class="relative">
            <div style=" transition: 2s;opacity: {!off?'0':'1'};">
                <Confetti xSpread={0.1} iterationCount=infinite />
            </div>
            <button
                id="Yes"
                type="button"
                onclick={sheSaidYes}
                class="absolute right-0 opacity-100"
                style="transform: translate(-8px, 0px) scale({yScale});"
                >Yes</button
            >
            <button
                type="button"
                onmouseenter={sheSaidNo}
                class="absolute left-0 no"
                style="transform: translate({x}px, {y}px) scale({xScale}) rotateZ({rotation}deg);  opacity:{opacity};"
                >No</button
            >
        </div>
    </div>

    <div
        style="
 position: fixed;
 opacity: {!yes?'0':'1'};
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 transition: 0.5s;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
    >
        <Confetti
            x={[-5, 5]}
            y={[0, 0.1]}
            delay={[500, 2000]}
            infinite
            duration={5000}
            size={15}
            amount={200}
            fallDistance="100vh"
        />
    </div>
</div>

<style>
    button {
        transition: 0.5s;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        @apply bg-fuchsia-600 hover:bg-fuchsia-700 font-semibold text-white px-6 py-3 rounded-lg;
    }

    button.no {
        @apply bg-red-600 hover:bg-red-700;
    }
</style>
