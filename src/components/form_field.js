import React from "react"

export default function FormField(props){
	return(
		<div className="form_field">
			<label htmlFor={props.title}>{props.title}</label>
			<input type={props.type} id={props.title} placeholder={props.placeholder}/>
		</div>
		)
}