<style>
    @import "Worksheet.css";
    @import "../styles/Page.css";
</style>

<script>

    import LogoBar from '../shared/LogoBar';
    import getNewWorksheet from '../../model/worksheet'
    import Section from "../shared/Section";

    export let worksheet = getNewWorksheet();
    let rows = 8;
</script>

<div class="page" >
    <LogoBar />
    <Section title="Character Idea">
        <input id="concept-input" type="text" bind:value={worksheet.highConcept} placeholder="High Concept Aspect"/>
        <input id="trouble-input" type="text" bind:value={worksheet.trouble} placeholder="Trouble Aspect"/>
        <input id="name-input" type="text" bind:value={worksheet.name} placeholder="Name"/>
    </Section>
    <Section title="Phase Trio" props={{style:"margin-top:0.9rem;"}}>
        <textarea id="phase-one" bind:value={worksheet.phaseOne} {rows} placeholder="Phase One: Your Adventure"/>
        <input id="ph1aspect-input" type="text" bind:value={worksheet.phaseOneAspect} placeholder="Phase One Aspect"/>
        <textarea id="phase-two" bind:value={worksheet.phaseTwo} {rows} placeholder="Phase Two: Crossing Paths"/>
        <input id="ph2aspect-input" type="text" bind:value={worksheet.phaseTwoAspect} placeholder="Phase Two Aspect"/>
        <textarea id="phase-three" bind:value={worksheet.phaseThree} {rows} placeholder="Phase Three: Crossing Paths Again"/>
        <input id="ph3aspect-input" type="text" bind:value={worksheet.phaseThreeAspect} placeholder="Phase Three Aspect"/>
    </Section>
    <div class="flex-row" style="margin-bottom: 0.9rem;margin-top: 0.9rem;">
        <Section title="Skills" props={{style:"width:100%"}}>
            <ul>
                <li>One at Great (+4)</li>
                <li>Two at Good (+3)</li>
                <li>Three at Fair (+2)</li>
                <li>Four at Average (+1) </li>
            </ul>
        </Section>
        <Section title="Stunts &amp; Refresh" props={{style:"width:100%; margin-left:1rem;"}}>
            <ul>
                <li>Three Stunts = Refresh of 3</li>
                <li>Four Stunts = Refresh of 2</li>
                <li>Five Stunts = Refresh of 1</li>
            </ul>
        </Section>
    </div>
    <Section title="Stress &amp; Consequences" >
        <ul>
            <li>Average or Fair Physique gives you a 3-point physical stress box.</li>
            <li>Good or Great Physique gives you 3- and 4-point physical stress boxes.</li>
            <li>Superb+ Physique gives you 3- and 4-point physical stress boxes and an additional mild consequence slot.</li>
            <li>Average or Fair Will gives you a 3-point mental stress box.</li>
            <li>Good or Great Will gives you 3- and 4-point mental stress boxes.</li>
            <li>Superb+ Will gives you 3- and 4-point mental stress boxes and an additional mild consequence slot.</li>
        </ul>
    </Section>
</div>