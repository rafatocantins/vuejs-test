<template id="navbar">
    <div class="Navbar" id="navbar">
    <b-navbar toggleable="lg" type="light" variant="faded">
        <b-navbar-brand href="/">{{ greeting }}</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav v-for="url in uris" v-bind:data="url" v-bind:key="url.url">
            <b-nav-item :key="url.url" :to="url.url" v-bind:href="url.url">{{ url.link }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>

export default {
    data () {
        return {
            greeting : 'Hello Vue',
            uris: [
                { link : 'Home', url : '/' },
                { link : 'About', url : '/about'},
                { link : 'Category', url : '/category'}
            ]
        }
    }
}




</script>

<style scoped>


</style>

