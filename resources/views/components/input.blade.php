@props(['id', 'label', 'vue'=> false])
<p>
    <label for="{{ $id }}">{{ $label }}</label>
    <input type="text" id="{{ $id }}" {{ $attributes }}>
    @if($vue)
    <p v-if="true">Siin on mingi viga</p>
    @endif
</p>
