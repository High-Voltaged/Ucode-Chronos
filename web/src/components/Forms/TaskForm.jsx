import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const TaskForm = ({ formik, isLoading, userCalendars = null }) => {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        {userCalendars && (
          <FormControl isInvalid={!!errors.calendar && touched.calendar} isRequired>
            <FormLabel htmlFor="calendar">Calendar</FormLabel>
            <Select
              id="calendar"
              name="calendar"
              value={values.calendar}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="filled"
              autoFocus
              focusBorderColor="teal.400"
              placeholder="Select a calendar"
            >
              {userCalendars.map((calendar) => (
                <option key={calendar.id} value={calendar.id}>
                  {calendar.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.calendar}</FormErrorMessage>
          </FormControl>
        )}
        <FormControl isInvalid={!!errors.name && touched.name} isRequired>
          <FormLabel htmlFor="name">Title</FormLabel>
          <Input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="filled"
            focusBorderColor="teal.400"
            placeholder="Add title"
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.content && touched.content}>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            id="content"
            name="content"
            value={values.content}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="filled"
            focusBorderColor="teal.400"
            placeholder="Here is a sample placeholder"
            size="sm"
            resize="none"
          />
          <FormErrorMessage>{errors.content}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.date && touched.date} isRequired>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            focusBorderColor="teal.400"
            variant="filled"
            placeholder="Select Date and Time"
          />
          <FormErrorMessage>{errors.date}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.color && touched.color} isRequired>
          <FormLabel htmlFor="color">Color</FormLabel>
          <Input
            id="color"
            name="color"
            type="color"
            value={values.color}
            onChange={handleChange}
            onBlur={handleBlur}
            focusBorderColor="teal.400"
            variant="filled"
            placeholder="color hex"
          />
          <FormErrorMessage>{errors.color}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          isLoading={isLoading}
          loadingText="Submitting"
          spinnerPlacement="end"
          colorScheme="yellow"
        >
          Save
        </Button>
      </VStack>
    </form>
  );
};

export default TaskForm;
