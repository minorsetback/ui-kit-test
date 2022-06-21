import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import arrow from './assets/arrow.png'
import checked from './assets/checked.png'

const Dropdown = ({ type, image, placeholder, options, descriptionOption }) => {
    const [isSelected, setIsSelected] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState("")

    const Wrapper = styled.div`
        min-width: 300px;
        max-width: 1500px;
        vertical-align: middle;
        display: table-cell;
    `

    const Dropdown = styled.div`
        border: 1px solid lightgray;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px 10px 10px 15px;
    `

    const Span = styled.span` 
        display: ${selectedOption === '' ? 'block' : 'none'};
        color: grey;
    `

    const DropdownImage = styled.img`
        display: ${type === 'variant3' ? 'none' : 'block'};
        transform:${isSelected ? "rotate(180deg)" : "rotate(0deg)"};
        float: right;
        width: 20px;
        height: 20px;
    `

    const SelectedOption = styled.span`
        display:${selectedOption !== "" ? "block" : 'none'};
    `
    const Options = styled.div`
        display:${isSelected ? 'block' : 'none'};
        margin-top: 5px;
        border: 1px solid lightgray;
        border-radius: 5px;
    `
    const OptionImage = styled.img`
        display:${image && type === 'variant2' ? 'block' : 'none'};
        width: 20px;
        height: 20px;
        float: left;
        margin-right: 15px;
    `
    const Option = styled.p`
        margin: 0;
        cursor: pointer;
        padding: 15px;
        &:hover{
            background: lightgrey;
        }
    `
    const CheckedImg = styled.img`
        float: right;
        width: 20px;
        height: 20px;
    `
    const RadioInput = styled.input`
        margin: 0;
        width: 20px;
        height: 20px;
    `

    const DescriptionOption = styled.span`
        float:right;
        margin-left: 250px;
        color: grey;
    `
    const LabelOption = styled.span`
        position: absolute;
        margin-left: 15px;
    `


    return (
        <Wrapper>
            <Dropdown onClick={() => { setIsSelected(!isSelected) }}>
                <Span>
                    {placeholder || "Select"}
                    <DropdownImage src={arrow} alt="dropdown arrow" />
                </Span>
                <SelectedOption>
                    <OptionImage src={image || ''} alt="options" />
                    {selectedOption}
                    <DropdownImage src={arrow} alt="dropdown arrow" />
                </SelectedOption>
            </Dropdown>
            <Options>
                {   
                    options &&
                    options.length &&
                    options?.map((option, index) => {
                    if (type === "variant4") {
                        return (
                            <div key={index + option}
                                onClick={() => {
                                    setSelectedOption(option)
                                    setIsSelected(false)
                                }}>
                                <Option>
                                    <RadioInput type="radio" checked={selectedOption === option} readOnly />
                                    <LabelOption>{option}</LabelOption>
                                    <DescriptionOption>{descriptionOption}</DescriptionOption>
                                </Option>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index + option}
                                onClick={() => {
                                    setSelectedOption(option)
                                    setIsSelected(false)
                                }}>
                                <Option>
                                    <OptionImage src={image || ''} alt="options" />
                                    {option}
                                    <CheckedImg src={checked} style={{ display: selectedOption === option ? 'block' : 'none' }} alt="checked" />
                                </Option>
                            </div>
                        )
                    }
                })}
            </Options>
        </Wrapper>
    )
}

Dropdown.propTypes = {
    type: PropTypes.oneOf(['variant1', 'variant2', 'variant3', 'variant4']),
    image: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    descriptionOption: PropTypes.string
};

Dropdown.defaultProps = {
    type: 'variant1',
    options: ["Variant1", "variant2", "variant3", "variant4"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png",
    descriptionOption: "Best for business owners and company administrators"
};


export default Dropdown