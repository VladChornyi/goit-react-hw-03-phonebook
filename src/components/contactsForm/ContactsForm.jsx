import React, { Component } from 'react';
import s from './ContactsForm.module.css'


class ContactsForm extends Component {
  initialState = {
    name: '',
    number: ''

  }
  
    state = {
        ...this.initialState
    }
      onHandleSubmit = (e) => {
          e.preventDefault();
        this.props.addContact(this.state)
        this.setState({...this.initialState})
   }

  onHandleChange = (e) => {
    const {name, value} = e.target
    this.setState( {[name]: value} )
  }
    render() {
        return (
            <form className={s.form} onSubmit={this.onHandleSubmit} >
                <label className={s.title} >
                    Name
              <input
                className={s.data}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={this.state.name}
                    onChange ={this.onHandleChange}
                    />
                </label>
                <label className={s.title} >
                    Number
              <input
                        className={s.data}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={this.state.number}
                        onChange={this.onHandleChange}
                        />
                </label>
                
        <button className={s.addBtn} type="submit">add contact</button>
      </form>
            
        );
    }
}

export default ContactsForm;
