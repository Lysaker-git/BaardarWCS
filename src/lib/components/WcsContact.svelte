<form>
        <label for="firstname">
            First name
            <input type="text" id="firstname" name="firstname" placeholder="" required>
        </label>
      
        <label for="lastname">
            Last name
            <input type="text" id="lastname" name="lastname" placeholder="" required>
        </label>

        <label for="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="" required>
        <label for="fruit">Fruit</label>
        <select id="fruit" required>
            <option value="" selected>Select Topic</option>
            <option>Alt 1</option>
            <option>Alt 2</option>
            <option>Alt 3</option>
            <option>Alt 4</option>
        </select>
        <label for="textarea">
            What can we help you with? 
            <textarea
                style="resize: none;"
                type="textarea" 
                id="textarea" 
                name="textarea" 
                placeholder="" 
                required 
            />
        </label>
        <button type='submit'>Send</button>
</form>

<style>
    form {
        max-width: 700px;
        margin: 0 auto;
    }
</style>