<script lang="ts">

    // import type {Project} from "$lib/common";

    export let project;

</script>

<div
        class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg"
>
    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-white">{project.name}</h2>
        <ul class="d-flex list-unstyled mt-auto">
            <li class="me-auto">
                <a class="btn btn-primary stretched-link" href="/project/{project.id}">Dashboard</a>
            </li>
            <!--			<li class="d-flex align-items-center me-3">-->
            <!--				<svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill" /></svg>-->
            <!--				<small>Earth</small>-->
            <!--			</li>-->
            <li class="d-flex align-items-center">
                <!--{project.id}-->
            </li>
        </ul>
    </div>
</div>

<style>
    .text-shadow-1 {
        text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
    }

    .card-cover {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
</style>
